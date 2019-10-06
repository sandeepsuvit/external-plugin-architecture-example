import { AfterViewInit, Compiler, Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

declare const SystemJS: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef, static: true }) content: ViewContainerRef;

  constructor(
    private _compiler: Compiler,
    private _injector: Injector
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadPlugins();
  }

  private async loadPlugins() {
    // import external module bundle
    const module = await SystemJS.import('assets/plugins/plugin-a.bundle.js');

    // compile module
    const moduleFactory = await this._compiler.compileModuleAsync<any>(module.PluginAModule);
    // const moduleFactory = await this._compiler.compileModuleAsync<any>(module["PluginAModule"]);

    // resolve component factory
    const moduleRef = moduleFactory.create(this._injector);

    // get the custom made provider name 'plugins'
    const componentProvider = moduleRef.injector.get('plugins');

    // from plugins array load the component on position 0
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory<any>(componentProvider[0][0].component);

    // compile component
    const pluginComponent = this.content.createComponent(componentFactory);
  }
}
