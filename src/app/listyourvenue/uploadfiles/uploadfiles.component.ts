import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../uploadfiles/uploadfile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {

  selectedFile: File;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  uploadService: any;

  constructor(private router: Router, uploadService: UploadFileService) { }

  selectFile(event: { target: { files: File; }; }) {
    this.selectedFile = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFile;
    this.uploadService.upload(this.currentFile)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });

    this.selectedFile = undefined;
  }

  ngOnInit(): void {

  }

  back() {
    this.router.navigateByUrl("/details")
  }

  next() {
    this.router.navigateByUrl("/security")
  }

}