# Blog Platform Backend

## Introduction

This is the backend implementation for a modern blog platform where users can create, like, and comment on blog posts and user-generated content.

## Tasks

This project involves implementing the following tasks:

## 1) Create a Post using POST

- Endpoint: ```http://localhost:4000/api/v1/posts/create```
- Method: POST
- Request Body: JSON
```json
  {
      "title": "Dummy Post2",
      "body": "Dummy Post1"
  }
```
- Description: This task involves creating a new post with a title and body.

## 2) Fetching Posts using GET
- Endpoint: ```http://localhost:4000/api/v1/posts```
- Method: GET
- Description: This task involves fetching a list of posts.
  
## 3) Create Comment using POST
- Endpoint: ```http://localhost:4000/api/v1/comments/create```
- Method: POST
- Request Body: JSON
```json
{
    "post": "6429343f2b912f721b9c50b8",
    "user": "Lakshyadeep",
    "body": "This is the Second Comment"
}
```
- Description: This task involves creating a comment for a specific post.
## 4) Like the Post Using POST
- Endpoint: ```http://localhost:4000/api/v1/likes/like```
- Method: POST
- Request Body: JSON
```json
{
    "post": "6429343f2b912f721b9c50b8",
    "user": "Lakshyadeep"
}
```
- Description: This task involves liking a specific post.
## 5) Unlike the Post Using POST
- Endpoint: ```http://localhost:4000/api/v1/likes/unlike```
- Method: POST
- Request Body: JSON
```json
{
    "post": "6429343f2b912f721b9c50b8",
    "like": "64293e833d3611dfcad7a664"
}
```
- Description: This task involves unliking a specific post.
## Models
This project uses the following data models:
## Post Model
- Fields:
  1. title: string
  2. body: string
  3. likes: [id, ref-like model]
  4. comments: [id, ref-comment model]
## Like Model
- Fields:
  1. post: [id, ref-post]
  2. user: string
## Comment Model
- Fields:
  1. post: [id, ref-post]
  2. body: string
  3. user: string
