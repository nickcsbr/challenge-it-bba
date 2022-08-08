import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBusiness } from 'src/app/core/models/i-business';
import { PoloService } from 'src/app/core/services/polo.service';

 @Component({
  selector: 'app-polos-list',
  templateUrl: './polos-list.component.html',
  styleUrls: ['./polos-list.component.scss']
})
export class PolosListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'business', 'valuation', 'situation', 'action'];
  dataSource!: MatTableDataSource<IBusiness>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  name = "Nome";
  business = "Business";
  valuation = "Valuation";
  situation = "Situação";
  action = "Ação";

  constructor(private poloService: PoloService) {
    this.poloService.getPolos().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
