package br.com.treinaweb.adoteumpet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.treinaweb.adoteumpet.core.model.Pet;
import br.com.treinaweb.adoteumpet.core.repositories.PetRepository;

@SpringBootApplication
public class AdoteUmPetApplication implements CommandLineRunner {

	@Autowired
	private PetRepository petRepository;

	public static void main(String[] args) {
		SpringApplication.run(AdoteUmPetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		var pet = new Pet();
		pet.setNome("Gudanzinho");
		pet.setHistoria("Historia Emocionante");
		pet.setFoto("https://1.bp.blogspot.com/-LA6zcOytfmA/YOkaWuRvmtI/AAAAAAAAY4w/x2qeTddBlU8yT7FMjUgkWKnOuOiN-C0-gCLcBGAsYHQ/w640-h480/Gudan%2B3.jpeg");
		petRepository.save(pet);		
	}

}
