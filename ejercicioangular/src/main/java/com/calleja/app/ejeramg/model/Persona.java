package com.calleja.app.ejeramg.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Table(name= "personas")

@Entity
public class Persona {
	@Id

	@Column(name="id")

	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator ="CUST_SEQ123")

	@SequenceGenerator(sequenceName="customer_seq123" ,allocationSize = 1,name="CUST_SEQ123")
	
	private Long id;
	private String nombre;
	private String apPaterno;
	private String apMaterno;
	private String sexo;
	private LocalDate fechaNacimiento;
	private String paisNacimento;
	private String provinciaNacimiento;
	private String localidadNacimiento;
	private Float peso;
	private Double altura;
	private String grupoSanguineo;
	private String nacionalidad;
	private String estadoCivil;
	private Long numLicencia;
	private Long numPasaporte;
	private String email;
	private String supervisor;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApPaterno() {
		return apPaterno;
	}
	public void setApPaterno(String apPaterno) {
		this.apPaterno = apPaterno;
	}
	public String getApMaterno() {
		return apMaterno;
	}
	public void setApMaterno(String apMaterno) {
		this.apMaterno = apMaterno;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public LocalDate getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(LocalDate fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getPaisNacimento() {
		return paisNacimento;
	}
	public void setPaisNacimento(String paisNacimento) {
		this.paisNacimento = paisNacimento;
	}
	public String getProvinciaNacimiento() {
		return provinciaNacimiento;
	}
	public void setProvinciaNacimiento(String provinciaNacimiento) {
		this.provinciaNacimiento = provinciaNacimiento;
	}
	public String getLocalidadNacimiento() {
		return localidadNacimiento;
	}
	public void setLocalidadNacimiento(String localidadNacimiento) {
		this.localidadNacimiento = localidadNacimiento;
	}
	public Float getPeso() {
		return peso;
	}
	public void setPeso(Float peso) {
		this.peso = peso;
	}
	public Double getAltura() {
		return altura;
	}
	public void setAltura(Double altura) {
		this.altura = altura;
	}
	public String getGrupoSanguineo() {
		return grupoSanguineo;
	}
	public void setGrupoSanguineo(String grupoSanguineo) {
		this.grupoSanguineo = grupoSanguineo;
	}
	public String getNacionalidad() {
		return nacionalidad;
	}
	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}
	public String getEstadoCivil() {
		return estadoCivil;
	}
	public void setEstadoCivil(String estadoCivil) {
		this.estadoCivil = estadoCivil;
	}
	public Long getNumLicencia() {
		return numLicencia;
	}
	public void setNumLicencia(Long numLicencia) {
		this.numLicencia = numLicencia;
	}
	public Long getNumPasaporte() {
		return numPasaporte;
	}
	public void setNumPasaporte(Long numPasaporte) {
		this.numPasaporte = numPasaporte;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSupervisor() {
		return supervisor;
	}
	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}
	
	
	
	

}
