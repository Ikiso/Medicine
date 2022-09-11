# rest-api-server

# medicine-service

# REST-API

## user-service
GET /users -- list of users -- 200, 404, 500
GET /users:id -- user by id -- 200, 404, 500
POST /users:id -- create user -- 201, 4xx,Header Location: url
PUT /users:id -- fully update user -- 204/200, 404, 400, 500
PATCH /user:id -- partially update user -- 204/200, 404, 400, 500
DELETE /user:id -- delete user by id -- 204, 404, 400

