install:	
	npm ci
	
brain-games:	
	node bin/brain-games.js
	
brain-calc:	
	node bin/brain-calc.js
	
brain-even:	
	node bin/brain-even.js
	
publish:	
	npm publish --dry-run
	
brain-gcd:
	node bin/brain-gcd.js
	
brain-progression:
	node bin/brain-progression.js
	
brain-prime:
	node bin/brain-prime.js

lint:	
	npx eslint .
