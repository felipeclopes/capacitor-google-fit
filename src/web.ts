import type { ListenerCallback, PluginListenerHandle} from '@capacitor/core';
import { WebPlugin } from '@capacitor/core';

import type { GoogleFitPlugin, AllowedResult } from './definitions';

export class GoogleFitWeb extends WebPlugin implements GoogleFitPlugin {
  constructor() {
    super({
      name: 'GoogleFit',
      platforms: ['web'],
    });
  }
  
  addListener(
    eventName: 'googleFitAllowed',
    listenerFunc?: ListenerCallback,
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    throw new Error(`Method not implemented.${eventName}${listenerFunc}`);
  }
  connect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async disable(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async open(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async isAllowed(): Promise<AllowedResult> {
    throw new Error('Method not implemented.');
  }
  async isPermissionGranted(): Promise<AllowedResult> {
    throw new Error('Method not implemented.');
  }
  async isInstalled(): Promise<{ value: boolean }> {
    throw new Error('Method not implemented.');
  }
  async getHistory(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getHistoryActivity(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}