# Compose Commander
Compose Commander is a CLI tool for manipulating ```docker-compose.yml``` files, designed to be installed globally and used to set simple properies from the Shell. It can be integrated as part of CI/CD pipelines to update image names and versions.

## Getting Started

Simply install compose-commander to your global npm packages
```
npm i -g compose-commander
```

You can run ```--help``` to see a list of options. Currently ```set``` is the only command. ```set``` can be used to set the value of a 1st level property on your service definition withon the compose file and has the following syntax.

```
compose-commander set <service> <property> <value>
```

## Example

Given the following example ```docker-compose.yml```

```
version: '3'
services:
  postgresql:
    container_name: postgresql
    restart: unless-stopped
    image: postgres:10
    volumes:
      - ./postgresql/data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: xxx
      POSTGRES_USER: postgres
    networks:
      service-network:
        ipv4_address: 10.0.0.100
    ports:
      - '5432:5432'
```

The following command

```
compose-commander set postgresql image postgres:11
```

Would update the image property to postgres 11 from 10. Which could then be pulled and deployed like so.

```
docker-compose pull postgresql
docker-compose up -d
```