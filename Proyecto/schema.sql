DROP DATABASE IF EXISTS ecomers;
CREATE DATABASE ecomers;

create table usuarios 
(
	email varchar(100) primary key,
	nombre varchar(100) not null,
	apellido varchar(100),
	password varchar(100) not null,
	id_rol int not null
);

create table roles
(
	id_rol serial primary key,
	nombre_rol varchar(100)
);

CREATE TABLE permisos (
    id_permiso SERIAL PRIMARY KEY,
    nombre_permiso VARCHAR(100) NOT NULL
);

CREATE TABLE rol_permisos (
    id_rol INT NOT NULL,
    id_permiso INT NOT NULL,
    PRIMARY KEY (id_rol, id_permiso),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
    FOREIGN KEY (id_permiso) REFERENCES permisos(id_permiso)
);

create table configuraciones
(
	id_configuracion serial primary key,
	email varchar(100) not null,
	nombre_configuracion varchar(100),
	estado char(1),
	id_pagina int
);

create table articulos
(
	id_articulo serial primary key,
	nombre_articulo varchar(100) not null,
	cantidad_articulo int,
	descripcion TEXT,
	precio float not null
);

create table categorias
(
	id_categoria serial primary key,
	nombre_categoria varchar(100) not null,
	id_pagina int
);

create table promociones
(
	id_promocion serial primary key,
	porcentaje float,
	estado char(1) not null,
	nombre_promocion varchar(100) not null,
	descuento float
	
);

create table paginas
(
	id_pagina serial primary key,
	nombre_pagina varchar(100),
	email varchar(100) not null
);

create table ordenes
(
	id_orden serial primary key,
	nombre_cliente varchar(100) not null,
	total float
);

create table envios
(
	id_envio serial not null,
	descripcion varchar(200),
	costo float
);

create table ordenes_articulos
(
	id_orden int not null,
	id_articulo int not null
);

create table favoritos
(
	id_articulo int not null,
	email varchar(100) not null
);

create table articulos_promociones
(
	id_articulo int not null,
	id_promocion int not null
);

create table categoria_promociones
(
	id_categoria int not null,
	id_promocion int not null
);

alter table usuarios add constraint userfkrol foreign key (id_rol) references roles(id_rol);

alter table paginas add constraint paginasfkusuarios foreign key (email) references usuarios(email);

alter table categorias add constraint categoriasfkpaginas foreign key (id_pagina) references paginas(id_pagina);

alter table ordenes_articulos add constraint ordenes_articulosfkordenes foreign key (id_orden) references ordenes (id_orden);

alter table ordenes_articulos add constraint ordenes_articulosfkarticulos foreign key (id_articulo) references articulos (id_articulo);

alter table favoritos add constraint favoritosfkarticulos foreign key (id_articulo) references articulos(id_articulo);

alter table favoritos add constraint favoritosfkusuario foreign key (email) references usuarios (email);

alter table articulos_promociones add constraint articulos_promocionesfkarticulos foreign key (id_articulo) references articulos (id_articulo);

alter table articulos_promociones add constraint articulos_promocionesfkpromociones foreign key (id_promocion) references promociones (id_promocion);

alter table categoria_promociones add constraint categoria_promocionesfkcategoria foreign key (id_categoria) references categorias (id_categoria);

alter table categoria_promociones add constraint categoria_promocionesfkpromociones foreign key (id_promocion) references promociones (id_promocion);


-- inserts 

insert into roles (id_rol, nombre_rol) values (1, 'Admin'), (2, 'User')

INSERT INTO USUARIOS (email, nombre, apellido, password, id_rol) 
values('aguilar@gmail.com','Francis','Aguilar','123',2),('francis@gmail.com','Francis','Aguilar','123',1)