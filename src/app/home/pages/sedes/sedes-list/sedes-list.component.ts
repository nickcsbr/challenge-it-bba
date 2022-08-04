import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBusiness } from 'src/app/core/models/i-business';
import { SedeService } from 'src/app/core/services/sede.service';

 @Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.scss']
})
export class SedesListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'business', 'valuation', 'situation', 'action'];
  dataSource!: MatTableDataSource<IBusiness>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  name = "Nome";
  business = "Business";
  valuation = "Valuation";
  situation = "Situação";
  action = "Ação";

  constructor(private sedeService: SedeService) {
    this.sedeService.getSedes().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
