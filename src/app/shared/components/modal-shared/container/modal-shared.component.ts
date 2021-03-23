import {
  Component, ComponentFactoryResolver, HostListener, Inject,
  OnInit, Type, ViewChild, ViewContainerRef
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CSSStyles } from 'src/app/models/modal.model';
import { InjectComponentDirective } from 'src/app/shared/directives/inject-component.directive';

@Component({
  selector: 'app-modal-shared',
  templateUrl: './modal-shared.component.html',
  styleUrls: ['./modal-shared.component.scss']
})
export class ModalSharedComponent implements OnInit {

  @ViewChild(InjectComponentDirective, { static: true }) injectComp: InjectComponentDirective;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      component: Type<any>,
      styles: CSSStyles,
      parameters: any[]
    },
    private mdDialogRef: MatDialogRef<ModalSharedComponent>,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    for (let propName in this.data.parameters) {
      Object.assign(componentRef.instance, this.data.parameters[propName]);
    }
  }

  private close(value): void {
    this.mdDialogRef.close(value);
  }

  public cancel(): void {
    this.close(false);
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    this.close(false);
  }

}
