import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    private categories = [
        {
            "id": 1,
    "name": "Computación",
    "description": "Productos de informática y computación"
  },
  {
    "id": 2,
    "name": "Audio",
    "description": "Productos de audio y sonido"
  },
  {
    "id": 3,
    "name": "Gaming",
    "description": "Accesorios y equipos para videojuegos"
  },
  {
    "id": 4,
    "name": "Hogar Inteligente",
    "description": "Dispositivos para automatización del hogar"
  },
  {
    "id": 5,
    "name": "Accesorios",
    "description": "Accesorios diversos para dispositivos electrónicos"

            
        }
    ]
    findAll(){
        return this.categories
    }
    findOnById (id:number){
        const categorie = this.categories.find(categorie => categorie.id === id)
        return categorie;
    }
}
