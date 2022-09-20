# tcp

一个简单的tcp服务器和客户端。

## 简单的tcp 服务器与客户端

server:

```rust
use std::thread;
use std::net::{TcpListener, TcpStream, Shutdown};
ust std::io::{Read, Write};

fn handle_client(mut stream: TcpStream){
    let mut data = [0 as u8; 50]; // 使用50个字节的缓冲
    while match stream.read(&mut data) {
        Ok(size) => {
            // 返回发送过来的数据
            steam.write(&data[0..size]).unwrap();
            true
        },
        Err(_) => {
            println!("An error occurred, terminating connection with {}", stream.peer_addr().unwrap());
            stream.shutdown(Shutdown::Both).unwrap();
            false
        }
    }{}
}

fn main() {
    let listener = TcpListener::bind("0.0.0.0:3333").unwrap();
    // 使用新的线程处理连接请求
    println!("Server listening on port 3333");
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                println!("new connection: {}",stream.peer_addr().unwrap());
                thread::spawn(move||{
                    // connection success
                    handle_client(stream);
                });
            },
            Err(e) => {
                println!("Error: {}", e);
            	// connection fail
            }
        }
    }
    // 关闭 socket
    drop(listener);
}
```



client:

```rust
use std::net::{TcpStream};
use std::io::{Read, Write};
use std::str::from_utf8;

fn main() {
    match TcpStream::connect("localhost:3333") {
        Ok(mut stream) => {
            println!("Successfully connected to server in port 3333");

            let msg = b"Hello!";

            stream.write(msg).unwrap();
            println!("Sent Hello, awaiting reply...");

            let mut data = [0 as u8; 6]; // using 6 byte buffer
            match stream.read_exact(&mut data) {
                Ok(_) => {
                    if &data == msg {
                        println!("Reply is ok!");
                    } else {
                        let text = from_utf8(&data).unwrap();
                        println!("Unexpected reply: {}", text);
                    }
                },
                Err(e) => {
                    println!("Failed to receive data: {}", e);
                }
            }
        },
        Err(e) => {
            println!("Failed to connect: {}", e);
        }
    }
    println!("Terminated.");
}
```

## server例子2.0

来源：https://gist.github.com/Vultour/144c2b95070c381cc56a82a7337aa11b

```rust
use std::io::prelude:*;
use std::net::{TcpListener, TcpStream, Shutdown};
use std::sync::mpsc;
use std::io::BufReader;
use std::thread;
use std::str;


fn listen(tx_pipe: mpsc::Sender<u32>) {
    let listener = TcpListener::bind("127.0.0.1:7777").unwrap();
    
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                                println!("Received a connection! - {}:{}", stream.peer_addr().unwrap().ip(), stream.peer_addr().unwrap().port());
                let txp = tx_pipe.clone();
                thread::spawn(move || {
                    connect_handler(stream, txp);
                });
                tx_pipe.send(1).unwrap();
            },
            Err(e) => println!("Error - {}", e)
        }
    }
    drop(listener);
}

fn connect_handler(stream: TcpStream, tx_pipe: mpsc::Sender<u32>){
    let mut buf = BufReader::new(stream.try_clone().unwrap());
    loop{
        //let mut s = [0u8; 4096];
        let mut s = String::new();
        match buf.read_line(&mut s){
            Ok(b)  => {
                if b == 0 { break; }
                print!("Received data ({} bytes): {}", b, s);
                if s.contains("quit"){
                    tx_pipe.send(2).unwrap();
                    break;
                }
                //println!("Received data ({} bytes): {}", b, std::str::from_utf8(&s).unwrap())
            }
            Err(e) => println!("Error receiving data! - {}", e)
        }
    }

    println!("Client {}:{} dropped", stream.peer_addr().unwrap().ip(), stream.peer_addr().unwrap().port());
    stream.shutdown(Shutdown::Both).unwrap();
}
fn main(){
    println!("Initializing");
    println!("Ctrl+C to exit");

    let (channel_tx, channel_rx) = mpsc::channel();
    
    let tx_pipe = channel_tx.clone();
    thread::spawn(move || { listen(tx_pipe); });
 
    let mut connections = 0;
    loop{
        match channel_rx.recv(){
            Ok(signal)  => {
                match signal{
                    1 => connections += 1,
                    2 => break,
                    _ => println!("Invalid signal received: {}", signal)
                }
            }
            Err(e)      => {
                println!("Pipe broken - {}", e);
            }
        }
    }

    println!("Total connections: {}", connections);
    println!("Exiting");
}
```



