FROM golang:alpine AS builder

WORKDIR /go/src/app

COPY . .

RUN go build -o /go/bin/app

FROM scratch

WORKDIR /go/bin

COPY --from=builder /go/bin/app /app

CMD ["/app"]