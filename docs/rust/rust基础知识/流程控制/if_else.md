# if_else

```rust
fn main() {
    let n = 5;
    if n < 0 {
        println!{"{}", n};
    }else if n > 0 {
         println!{"{}", n};
    }else {
        println!("{} is zero", n);
    }
    
    let big_n = 
    	if n < 10 && n > -10 {
          10 * n  
        }else {
           n / 2  
        };
}
```