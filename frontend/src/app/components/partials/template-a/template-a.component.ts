import { Component } from '@angular/core';

@Component({
  selector: 'templateA',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.css']
})
export class TemplateAComponent {
  public reactions = [
    {title:'沒有', value:'no'},
    {title:'少許', value:'little'},
    {title:'嚴重', value:'serious'}
  ]
  

  public questions = [
    {title:'手術後反應', 
    child:[{title:'離開中心前有否感到暈眩？', value:'no'},{title:'麻醉後有否感噁心/嘔吐？', value:'no'}],
    type:'reaction'
    },
    {title:'電話預約服務',
    child:[{title:'中心接待', value:'3'}, {title:'登記過程順暢及有效率', value:'3'}, {title:'登記護士態度親切、友善主動地提供服務', value:'3'}],
    type:'score'
    }
  ]

}
