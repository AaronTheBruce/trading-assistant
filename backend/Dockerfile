# Dockerfile for Rust backend

FROM rust:1.56 as builder

WORKDIR /app

COPY . .

RUN rustup override set nightly

# RUN apt-get update && apt-get install -y curl
# RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
# ENV PATH="/root/.cargo/bin:${PATH}"

RUN cargo build --release

FROM debian:buster-slim

COPY --from=builder /app/target/release/backend /usr/local/bin/backend

EXPOSE 8000

CMD ["backend"]
