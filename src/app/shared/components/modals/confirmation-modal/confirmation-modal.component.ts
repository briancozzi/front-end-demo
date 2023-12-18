import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ng-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  providers: [BsModalService],
  standalone: true,
  imports: [CommonModule],
})
export class ConfirmationModalComponent implements OnInit {
  @Input() isConfirming: boolean = false;
  @Input() confirmBtnText: string = 'Yes';
  @Input() declineBtnText: string = 'No';
  @Input() isDeclining: boolean = false;
  @Input() content: string = 'Are you sure want to confirm these changes?';
  @Input() heading: string = 'Confirm changes';
  @Output() confirm: EventEmitter<null> = new EventEmitter<null>();
  @Output() decline: EventEmitter<null> = new EventEmitter<null>();
  @Output() hidden: EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('modalTemplate', { static: false }) template: any;
  modalRef!: BsModalRef;
  modalRefs: BsModalRef[] = [];
  config: ModalOptions = {
    animated: true,
    keyboard: true,
    ignoreBackdropClick: true,
    class: 'modal-dialog-centered',
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  onConfirm() {
    this.confirm.emit();
  }

  onDecline() {
    this.decline.emit();
  }

  onHidden() {
    this.hidden.emit();
  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hide() {
    this.modalRef.hide();
  }
}
