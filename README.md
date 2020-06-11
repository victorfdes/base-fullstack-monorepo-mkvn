# What is this?
This is a starter Typescript based full-stack setup that uses Vue for the UI, Koa for backend, and Mongo as a database. The stack is based on personal preference. It is modular so that individual frameworks can be swapped out for another based on the project requirement.

# Why a Monorepo
The reasons are many, however here is what I find the most important reason. With my usual full-stack applications, my branches are named basis features or bugs/hotfixes. The feature as a whole is not concerned if it's a frontend or backend change. It's usually both. Having a monorepo saves us from keeping track of multiple repositories that belong to the same feature. At any given point, a branch has both client and server code that works together.

Here is a more interesting read on this topic if you are interested: [Advantages of a Monorepo](https://danluu.com/monorepo/)

# Customization
The packages directory contains all individual packages. Feel free to swap the code with the framework of your choice. There may be some additional configuration steps to be made in the docker files and start scripts based on what has been added.

# Getting Started

## Using Docker for mongo

**Create a volume**

```
docker volume create mongodbdata
```

**Run the database**

```
docker run -p 27017:27017 -v mongodbdata:/data/db mongo
```

## Starting UI

Being a standard Vue CLI based project

- Navigate to /packages/web/

- Install Dependencies
```
yarn
OR
npm i
```
- Start dev server
```
yarn serve
OR
npm run serve
```
