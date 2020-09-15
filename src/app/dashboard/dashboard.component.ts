import { Component, OnInit } from '@angular/core';
import { RentalbookService } from '../rentalbook.service';

export interface RentalBookElement {
  id_book: number;
  id_client: number;
  id_status_rendal: number;
  date_start_rental: string;
  date_end_rental: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public rentalbooks;
  constructor(private rentalbookService: RentalbookService) { }

  ngOnInit(): void {
    this.callRentalBooks();
  }

  callRentalBooks() {
    this.rentalbookService.getRentalBooks().subscribe((data: Array<Object>) => {
      console.log(data);
      this.rentalbooks = data;
    });
  }

}
