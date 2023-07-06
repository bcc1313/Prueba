package com.calleja.app.ejeramg.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calleja.app.ejeramg.dao.PersonasDao;
import com.calleja.app.ejeramg.model.Persona;

@Service
public class PersonaService implements IService<Persona>{
	
	@Autowired
	private PersonasDao persdao;
	

	@Override
	public List<Persona> listar() {
		// TODO Auto-generated method stub
		return (List<Persona>)persdao.findAll();
	}

	@Override
	public Optional<Persona> getById(Long id) {
		// TODO Auto-generated method stub
		return persdao.findById(id);
	}

	@Override
	public void guardar(Persona t) {
		// TODO Auto-generated method stub
		persdao.save(t);
	}

	@Override
	public void eliminar(Long id) {
		// TODO Auto-generated method stub
		persdao.deleteById(id);
	}

}
