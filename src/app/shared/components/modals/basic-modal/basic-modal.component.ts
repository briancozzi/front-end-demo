import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
  OnInit,
  Input,
} from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss'],
  providers: [BsModalService],
  standalone: true,
  imports: [CommonModule],
})
export class BasicModalComponent implements OnInit {
  @Input() ignoreBackdropClick: boolean = true;
  @Input() heading: string = 'Modal open';
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnBackdrop: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modalTemplate', { static: false }) template: any;

  templateRef!: TemplateRef<any>;
  modalRef!: BsModalRef;
  config: ModalOptions = {
    animated: true,
    keyboard: true,
    ignoreBackdropClick: this.ignoreBackdropClick,
    class: 'modal-dialog-centered modal-dialog-slideout',
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.modalService.onHidden.subscribe((reason: string) => {
      if (reason === 'backdrop-click') {
        this.OnBackdrop.emit();
      }
      if (reason === 'esc') {
        this.hidden.emit();
      }
    });
  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
    // this.modalRefs.push(this.modalRef);
  }

  hide(event?: any) {
    this.modalRef.hide();
  }

  closeAllModals() {
    // this.modalRefs.forEach((modal) => modal.hide());
  }
}
