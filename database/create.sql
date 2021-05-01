--Schema de banco de dados para teste da aplicação

create schema sensores;

create table at.sensor (
	id serial primary key,
    nome varchar(150) not null,
	descricao text not null,
	tipo_sensor char(1) not null,
	id_local integer not null,	
	data_hora_cadastro timestamp default now(),
	CONSTRAINT sensor_id_local_fkey FOREIGN KEY (id_local) REFERENCES at.local(id)
);

create table at.local (
	id serial primary key,
    nome varchar(150) not null,
	descricao text not null,
	data_hora_cadastro timestamp default now()
);

create table at.consumo_energia (
	id serial primary key,
	id_sensor integer not null,
	cosumo integer not null,	
	data_hora_cadastro timestamp default now(),
	CONSTRAINT consumo_energia_id_sensor_fkey FOREIGN KEY (id_sensor) REFERENCES at.sensor(id)
);
