default: test

b2g:
	./node_modules/.bin/mozilla-download --verbose --product b2g $@

node_modules:
	npm install

.PHONY: test
test: node_modules b2g test-unit test-integration

.PHONY: test-integration
test-integration:
	./bin/marionette-mocha --profile-base $(PWD)/profile.js $(shell find test/integration) -t 100s

.PHONY: test-unit
test-unit:
	./node_modules/.bin/mocha -t 100s \
		test/mocha/parentrunner.js \
		test/childrunner.js \
		test/profilebuilder.js \
		test/runtime.js \
		test/runtime/*.js \
		test/marionette.js \
		test/bin/marionette-mocha.js

.PHONY: ci
ci:
	Xvfb :99 &
	DISPLAY=:99 make test
