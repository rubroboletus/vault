/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { Response } from 'miragejs';

/*
  These are mocked responses to mimic what we get from the server
  when within a chrooted listener (assuming the namespace exists)
 */
export default function (server) {
  server.get('sys/health', () => new Response(400, {}, { errors: ['unsupported path'] }));
  server.get('sys/replication/status', () => new Response(400, {}, { errors: ['unsupported path'] }));
}
