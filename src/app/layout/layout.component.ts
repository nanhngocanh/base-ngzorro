import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  role: any = 'm';
  isCollapsed = false;
  menus: any[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      url: '',
    },
    {
      title: 'Khách hàng',
      icon: 'database',
      subMenus: [
        {
          title: 'Hồ sơ cá nhân',
          url: `customer/m/list`,
        },
        {
          title: 'Hồ sơ doanh nghiệp',
          url: ``,
        },
        {
          title: 'Phê duyệt khách hàng',
          url: `customer/m/sub-list`,
        },
      ],
    },
    {
      title: 'Seller',
      icon: 'user',
      subMenus: [
        {
          title: 'Hồ sơ seller',
          url: `sale/m/list`,
        },
        {
          title: 'Phê duyệt seller',
          url: `sale/m/sub-list`,
        },
      ],
    },

    {
      title: 'Quản lý hợp đồng',
      icon: 'file',
      url: 'contract/contract',
    },
    {
      title: 'Settings',
      icon: 'ellipsis',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
