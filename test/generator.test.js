const path = require('path');

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('react scaffolder', () => {
  const generator = path.resolve(__dirname, '..', 'generators', 'app');
  const applicationName = 'my-app';
  const commonOutput = [
    `${applicationName}/build`,
    `${applicationName}/public`,
    `${applicationName}/src`,
    `${applicationName}/.eslintrc.json`,
    `${applicationName}/.gitignore`,
    `${applicationName}/.prettierrc`,
    `${applicationName}/.stylelintrc.json`,
    `${applicationName}/package.json`,
    `${applicationName}/.env`,
    `${applicationName}/tsconfig.json`
  ];

  const node = '>= 16.13.1';
  const npm = '>= 6.14.7';
  const yarn = '>= 1.22.4';

  it('generates a react template', () => {
    const tsOutput = [
      `${applicationName}/tsconfig.json`,
      `${applicationName}/src/index.tsx`
    ];

    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true, react: true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.file(commonOutput.concat(tsOutput));
        assert.noFile(`${applicationName}/.gitignore.sample`);
      });
  });

  it('generates a react ant template', () => {
    const tsOutput = [
      `${applicationName}/tsconfig.json`,
      `${applicationName}/src/index.tsx`
    ];

    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true, reactAntd: true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.file(commonOutput.concat(tsOutput));
        assert.noFile(`${applicationName}/.gitignore.sample`);
      });
  });

  it('generates a template with NPM', () => {
    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.jsonFileContent(`${applicationName}/package.json`, {
          name: applicationName,
          engines: { node, npm }
        });
        assert.fileContent(`${applicationName}/public/index.html`, applicationName);
      });
  });

  it('generates a template with Yarn', () => {
    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true })
      .withPrompts({ applicationName, yarn: 'Y' })
      .then(() => {
        assert.jsonFileContent(`${applicationName}/package.json`, {
          name: applicationName,
          engines: { node, yarn }
        });
        assert.fileContent(`${applicationName}/public/index.html`, applicationName);
      });
  });
});
