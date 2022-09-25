# udp

资料：

https://gist.github.com/lanedraex/bc01eb399614359470cfacc9d95993fb



https://idndx.com/writing-highly-efficient-udp-server-in-rust/



## 例子1

server:

```rust
use std::thread::
use std::net::UdpSocket;

fn main() {
    let socket = UdpSocket::bind("0.0.0.8888").expect("could not bind socket");
    
    loop {
        let mut buf = [0u8; 1500];
        let sock = socket.try_clone().expect("Failed to clone socket");
        match socket.recv_from(&mut buf){
            Ok((_, src)) => {
                thread::spawn(move || {
                    println!("Handling connection from {}", src);
                    sock.send_to(&buf, &src).expect("Failed to send a response");
                });
            },
            Err(e) => {
                eprintln!("could not recieve a datagram: {}", e);
            }
        }
    }
}
```

client:

```rust
use std::net::UdpSocket;
use std::{str,io};

fn main() {
    let socket = UdpSocket::bind("127.0.0.1:8000").expect("Could not bind client socket");
    socket.connect("127.0.0.1:8888").expect("Could not connect to server");
    loop {
        let mut input = String::new();
        let mut buffer = [0u8; 1500];
        io::stdin().read_line(&mut input).expect("Failed to read from stdin");
        socket.send(input.as_bytes()).expect("Failed to write to server");

        socket.recv_from(&mut buffer).expect("Could not read into buffer");
        print!("{}", str::from_utf8(&buffer).expect("Could not write buffer as string"));
    }
}
```

