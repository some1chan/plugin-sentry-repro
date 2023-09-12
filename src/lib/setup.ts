// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework';
import '@sapphire/plugin-logger/register';
import '@kaname-png/plugin-sentry/register';
import { setup } from '@skyra/env-utilities';
import * as colorette from 'colorette';

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);

// Read env var
setup();

// Enable colorette
colorette.createColors({ useColor: true });
