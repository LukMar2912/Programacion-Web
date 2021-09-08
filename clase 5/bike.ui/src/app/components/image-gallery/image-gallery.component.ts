import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor(private imageService: ImagesService) {

    console.log("Todas la imagenes retornadas por el service");
    console.dir(imageService.getImages());
    console.log("Imagen por id = 5");
    console.dir(imageService.getImageById(5));

  }

  ngOnInit(): void {
  }

}