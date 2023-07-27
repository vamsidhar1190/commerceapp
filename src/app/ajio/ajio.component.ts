import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajio',
  templateUrl: './ajio.component.html',
  styleUrls: ['./ajio.component.scss'],
})
export class AjioComponent implements OnInit{
  showpopup: boolean = false;

  prodarray: any[] = [];

  productdata:any
  prod:any[]=[]

  productForm!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  pdfUrl: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      prodBrand: [''],
      prodSize: [''],
      prodQua: [''],
      imageupload:[''],
      prodprice:[''],
      prodDes: this.formBuilder.array([])
    });

    // Add initial product description field
    this.addProdDes();
    this.products()
  }

  get prodDesForms(): FormArray {
    return this.productForm.get('prodDes') as FormArray;
  }

  addField() {
    this.prodDesForms.push(this.formBuilder.group({
      description: ''
    }));
  }

  addProdDes() {
    this.addField();
  }

  removeProdDes(index: number) {
    this.prodDesForms.removeAt(index);
  }


submit(){
  console.log(this.productForm.value);
  const form = this.productForm.value
  const ajioObj = {
    imgSrc:this.imagePreview,
    prodBrand:form.prodBrand,
    prodDes: form.prodDes,
    prodQua : form.prodQua,
    prodSize: form.prodSize,
    prodprice:form.prodprice
  }

  this.prodarray.push(ajioObj)
  console.log(this.prodarray);
  localStorage.setItem('jiodata',JSON.stringify(this.prodarray))
  this.products( )
  console.log(this.prodarray);
  this.showpopup = false;
  this.productForm.reset();
}
products() {
  this.productdata = JSON.parse(localStorage.getItem('jiodata')!);
  console.log(this.productdata);
  
  // for (let product of this.productdata) {
  //   if (Array.isArray(product.imageupload)) {
  //     const imageUrls = [];
  //     for (let fileContent of product.imageupload) {
  //       const imageUrl = fileContent;
  //       imageUrls.push(imageUrl);
  //     }
  //     product.imageupload = imageUrls;
  //   } else if (product.imageupload) {
  //     product.imageupload = [product.imageupload];
  //   }
  // }
  // console.log(this.productdata);
}

openpopup() {
  this.showpopup = true;
  console.log(this.showpopup);
}
onFileChange(event: any) {
  const files = event.target.files;
  if (files && files.length) {
    const fileContents: any[] = [];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
      console.log(this.imagePreview);
      
    };
    reader.readAsDataURL(files[0]);
    this.productForm.patchValue({ imageupload: files[0] }); // Set the selected file in the form control
  }
}

}





