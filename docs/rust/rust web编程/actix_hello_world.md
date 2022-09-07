# actix例子1 HelloWorld

## 依赖

```toml
[dependencies]
actix-web = "4"
```

## 例子 hello world

```rust
// 导入 actix_web 相关结构体
use actix_web::{get,web, App, HttpServer, Responder};

#[get("/hello/{name}")]
async fn greet(name: web::Path<String>) -> impl Responder {
    format!("hello {name}")
}


#[actix_web::main]  // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(||{
        App::new().server(greet)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```

