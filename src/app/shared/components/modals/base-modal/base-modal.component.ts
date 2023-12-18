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
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  providers: [BsModalService],
  imports: [CommonModule],
  standalone: true,
})
export class BaseModalComponent implements OnInit {
  @Input() ignoreBackdropClick: boolean = true;
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnBackdrop: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modalTemplate', { static: false }) template: any;

  modalRefs: BsModalRef[] = [];
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
      } else {
      }
    });
  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hide(event?: any) {
    this.modalRef.hide();
  }

  closeAllModals() {
    this.modalRefs.forEach((modal) => modal.hide());
  }
}
