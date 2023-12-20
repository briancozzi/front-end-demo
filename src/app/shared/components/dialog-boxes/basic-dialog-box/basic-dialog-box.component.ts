import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-basic-dialog-box',
  templateUrl: './basic-dialog-box.component.html',
  styleUrls: ['./basic-dialog-box.component.scss'],
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
})
export class BasicDialogBoxComponent implements OnInit {
  @Input() header: any = '';
  @Input()
  templateRef!: TemplateRef<any>;
  @Input() dismissableMask: boolean = false;
  @Input() closeOnEscape: boolean = true;
  // @Output() onCancel = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();
  @ViewChild('dialogBox') dialogBox!: ConfirmDialog;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {}

  // cancel() {
  //   this.confirmationService.close();
  // }

  close() {
    this.onClose.emit();
  }

  hide() {
    this.confirmationService.close();
  }

  open() {
    this.setConfig();
    this.confirmationService.confirm({});
  }

  private setConfig() {
    this.dialogBox.dismissableMask = this.dismissableMask;
    this.dialogBox.closeOnEscape = this.closeOnEscape;
  }
}
