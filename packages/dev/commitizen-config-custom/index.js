const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable')
const defaultTypes = require('@digitalroute/cz-conventional-changelog-for-jira/types')
const pick = require('lodash/pick')

module.exports = custom({
    types: pick(defaultTypes, ['feat', 'fix', 'refactor', 'revert', 'chore']),
    skipScope: true,
    scopes: [
        // Apps
        'algorithms',
        'docs',
        // Workspaces
        'apps',
        'components',
        'dev',
        // Generic
        'build',
        'changeset',
        'other',
    ],
    jiraMode: false,
})
