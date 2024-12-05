export interface Device {
  clientVersion: string;
  clock: number;
  controllerId: string;
  description: string;
  hidden: boolean;
  id: string;
  lastOnline: number;
  lastSeen: number;
  name: string;
  networkId: string;
  nodeId: string;
  physicalAddress: string | null;
  physicalLocation: string | null;
  protocolVersion: number;
  supportsRulesEngine: boolean;
  type: string;
}
