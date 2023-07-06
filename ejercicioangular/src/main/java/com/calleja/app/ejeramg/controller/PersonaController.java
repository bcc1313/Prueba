package com.calleja.app.ejeramg.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.calleja.app.ejeramg.model.Persona;
import com.calleja.app.ejeramg.service.IService;



@RestController
@RequestMapping("api/personas")
@CrossOrigin(origins="*")
public class PersonaController {
	
	@Autowired
	IService<Persona> perservice;
	
	@PostMapping
	public Map<String, String> guardar(@RequestBody Persona p){
		perservice.guardar(p);
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("msg", "Persona guardada correctamente");
		return respuesta;
	}
	
	@GetMapping
	public List<Persona> listar(){
		return perservice.listar();
	}
	
	@GetMapping ("/obtener/{id}")
	public Persona obtenerPorId(@PathVariable(name = "id") Long id) {
		Optional<Persona> persona = perservice.getById(id);
		if(persona.isPresent()) {
			return persona.get();
		}
		else {
			return new Persona();
		}
	}
	
	@DeleteMapping("eliminar")
	public Map<String, String> eliminar(@RequestParam(name = "id") Long id){
		perservice.eliminar(id);
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("msg", "Persona eliminada correctamente");
		return respuesta;
	}
	
	@PutMapping("/actualizar/{id}")
	public Map<String, String> actualizar(@RequestBody Persona p, @PathVariable(name = "id") Long id){
		Optional<Persona> persona = perservice.getById(id);
		if(persona.isPresent()) {
			p.setId(id);
			perservice.guardar(p);
		}
		else {
			throw new RuntimeException("La persona no existe en la bd");
		}
		Map<String , String> respuesta = new HashMap<>();
		respuesta.put("msg", "Persona actualizada correctamente");
		return respuesta;
	}

}
