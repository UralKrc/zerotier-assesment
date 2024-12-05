export interface Network {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  config: any;
  rulesSource: string;
  tags: any[];
  capabilities: any[];
  members: any[];
}
