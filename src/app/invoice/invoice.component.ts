import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id!: number | null;
  active!: boolean | null;
  //invoice: Invoice | undefined;


  constructor(private route: ActivatedRoute
   // ,private router: Router    
   ) {}

  ngOnInit(): void {
  /*  this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.active = params['active'] === 'true';

      // Recherchez la facture dans la liste du composant InvoiceListComponent
      const invoiceList: Invoice[] = [
        { idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: '12/12/2021', active: true },
        { idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: '22/11/2020', active: true },
        { idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: '18/10/2020', active: false },
        { idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: '14/12/2020', active: true },
      ];

      this.invoice = invoiceList.find((invoice) => invoice.idFacture === this.id);

      if (!this.invoice) {
        // Si la facture n'est pas trouvée, redirigez l'utilisateur vers une page d'erreur ou affichez un message
        this.router.navigate(['/error']); // Redirection vers une page d'erreur
      }
      
    });
  */
  this.route.queryParams.subscribe((queryParams) => {
      this.id = +queryParams['id'];
      this.active = queryParams['active'] === 'true';
    });
  }
}
