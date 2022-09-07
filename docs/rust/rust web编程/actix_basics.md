# actix例子2  基本使用

## 依赖

```toml
actix-files = "0.6"
actix-session = {version = "0.7", features = ["cookie-session"]}
actix-web = "4"

async-stream = "0.3"
env_logger = "0.9"
log = "0.4"
```



## 例子 基础使用

```rust
use std::{convert::Infallible, io};


// actix_web
use actix_files::{Files, NamedFile};
use actix_session::{storage::CookieSessionStore, Session, SessionMiddleware};
use actix_web::{
    error,
    get,
    http::{header::{self, ContentType},Method, StatusCode},
    middleware,
    web,
    App,
    Either,
    HttpRequest,
    HttpResponse,
    HttpServer,
    Responder,
    Result,
};

use async_stream::stream;

// NOTE: Not a suitable session key for production.
static SESSION_SIGNING_KEY: &[u8] = &[0;64];

/// 图像
#[get("/favicon")]
async fn favicon() -> Result<impl Responder>{
  Ok(NamedFile::open("static/favicon.ico")?)  
}

/// 简单的处理
#[get("/welcome")]
async fn welcome(req: HttpRequest, session: Session) ->Result<HttpResponse> {
    println!("{req:?}");
    
    // session
    let mut counter = 1;
    if let Some(count) = session.get::<i32>("counter")?{
        println!("session value: {count}");
        counter = count + 1;
    }
    
    session.insert("counter", counter)?;
    
    Ok(
    	HttpResponse::build(StatusCode::OK)
        .content_type(ContenType::plaintext())
        .body(include_str("../static/welcome.html"))
    )
}

async fn default_handler(req_method: Method) -> Result<impl Responder> {
    match req_method {
        Method::GET => {
            let file = NameFile::open("static/404.html")?
            	.customize()
            	.with_status(StatusCode::NOT_FOUND);
            Ok(Either::Left(file))
        }
        _ => OK(Either::Right(HttpResponse::MethodNotAllowed().finish())),
    }
}

async fn response_body(paht: web::Path<String>) -> HttpResponse{
    let name = path.into_inner();
    
    HttpResponse::Ok().streaming(stream!{
     	yield Ok::<_, Infallible>(web::Bytes::from("Hello "));
        yield Ok::<_, Infallible>(web::Bytes::from(name));
        yield Ok::<_, Infallible>(web::Bytes::from("!"));  
    })
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));
    
    let key = actix_web::cookie::Key:from(SESSION_SIGNING_KEY);
    
    log::info("starting HTTP server at http://localhost:8080");
    
    // todo
    HttpServer::new(move || {
        App::New
        	.wrap()
        	.wrap()
    }).bind(("127.0.0.1", 8080))?.workers(2).run().await
}
```

