import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @ViewChild(Table) dataTable!: Table;
  statuses!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  public users = [
    {
      "name": "John Doe",
      "date": "1990-05-15",
      "age": '33',
      "gender": "male"
    },
    {
      "name": "Jane Smith",
      "date": "1985-09-22",
      "age": '38',
      "gender": "female"
    },
    {
      "name": "Michael Johnson",
      "date": "1978-03-01",
      "age": '45',
      "gender": "male"
    },
    {
      "name": "Emily Davis",
      "date": "1995-11-07",
      "age": '28',
      "gender": "female"
    },
    {
      "name": "David Lee",
      "date": "1982-06-30",
      "age": '41',
      "gender": "male"
    },
    {
      "name": "Sarah Wilson",
      "date": "1992-02-14",
      "age": '31',
      "gender": "female"
    },
    {
      "name": "Robert Taylor",
      "date": "1975-08-20",
      "age": '48',
      "gender": "male"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    },
    {
      "name": "Lisa Anderson",
      "date": "1988-12-05",
      "age": '35',
      "gender": "female"
    },
    {
      "name": "Thomas Martinez",
      "date": "1983-04-28",
      "age": '40',
      "gender": "male"
    },
    {
      "name": "Olivia Thompson",
      "date": "1991-09-01",
      "age": '32',
      "gender": "female"
    }
  ]

  ngOnInit() {
    // this.users.forEach((row:any) => {
    //   row.date = new Date(row.date)
    // })
    console.log("users", this.users)

    this.loading = false
  }

  clear(table: Table) {
    table.clear();
  }

  filter(event:any){
    console.log('filter', event)
    this.dataTable.filterGlobal(event.target.value, 'contains')

  }

}
