import test from 'node:test';
import assert from 'node:assert/strict';

import { generateMockResponse } from '../src/utils/mockResponses.js';

test('detects certification wording without mistaking BIS as an IS query', () => {
  const response = generateMockResponse('How can I get BIS certification?', 'en');
  assert.equal(response.type, 'certification');
  assert.match(response.text, /certification/i);
});
