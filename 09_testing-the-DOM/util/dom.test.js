import fs from 'fs';
import path from 'path';

import { describe, it, expect, vi } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

// set up virtual DOM
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
// render virtual page
document.write(htmlDocumentContent);
// mock the global document object
vi.stubGlobal('document', document)

describe('DOM testing', () => {
	it('first test', () => {
		showError('test');
	});
})
