DROP SCHEMA public CASCADE;
CREATE SCHEMA public AUTHORIZATION eduardofreire;
COMMENT ON SCHEMA public IS 'standard public schema';


CREATE TABLE public.endereco (
	id bigserial NOT NULL,
	endereco varchar(255) NOT NULL,
	cep int8 NOT NULL,
	CONSTRAINT endereco_pkey PRIMARY KEY (id)
);
CREATE TABLE public.hospital (
	id int8 NOT NULL,
	nome varchar(255) NULL,
	id_endereco int8 NOT NULL,
	CONSTRAINT hospital_pkey PRIMARY KEY (id)
);
CREATE TABLE public.medicamento (
	id bigserial NOT NULL,
	nome varchar(255) NOT NULL,
	descricao text NULL,
	CONSTRAINT medicamento_pkey PRIMARY KEY (id)
);
CREATE TABLE public.paciente (
	id bigserial NOT NULL,
	identificador varchar(255) NOT NULL,
	img_pulmao bytea NULL,
	id_hospital int8 NULL,
	descricao text NULL,
	exame_data timestamp NOT NULL,
	relatorio_data timestamp NOT NULL,
	CONSTRAINT paciente_pkey PRIMARY KEY (id)
);
CREATE TABLE public.rl_paciente_medicamento (
	id_paciente int8 NOT NULL,
	id_medicamento int8 NOT NULL
);

ALTER TABLE public.rl_paciente_medicamento ADD CONSTRAINT tb_medicamento_rl_paciente_medicamento FOREIGN KEY (id_medicamento) REFERENCES medicamento(id);
ALTER TABLE public.rl_paciente_medicamento ADD CONSTRAINT tb_paciente_rl_paciente_medicamento FOREIGN KEY (id_paciente) REFERENCES paciente(id);
ALTER TABLE public.paciente ADD CONSTRAINT tb_paciente_tb_hospital FOREIGN KEY (id_hospital) REFERENCES hospital(id);
ALTER TABLE public.hospital ADD CONSTRAINT tb_hospital_tb_endereco FOREIGN KEY (id_endereco) REFERENCES endereco(id);