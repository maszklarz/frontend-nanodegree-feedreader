/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has url defined and nonempty in each feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed).toBeDefined();
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined and nonempty in each feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed).toBeDefined();
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when clicked', function(){
            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

        it('are added to feed by loadFeed()', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialTitle = '';

        beforeEach(function(done) {
            /* The first call to loadFeed */
            loadFeed(0, function() {
                initialTitle = $('.feed .entry h2').html();
                /* The second call to loadFeed() is in the first loadFeed's callback
                 * to ensure the second loadFeed() call occurs after the first one
                 * is completed.
                 */
                loadFeed(1, function() {
                    done();
                });
            });
        });

        /* Compare results of first and second loadFeed()
         * The comparison is based on the title of the first element of each feed.
         * There is a small chance the title is the same in two unrelated feeds.
         * In such a case the test would fail.
         */
        it('modifies entries in .feed if new feed is loaded', function(done) {
            expect($('.feed .entry h2').length).toBeGreaterThan(0);
            expect(initialTitle).toBeDefined();
            expect(initialTitle).not.toBe('');
            expect($('.feed .entry h2').html()).toBeDefined();
            expect($('.feed .entry h2').html()).not.toBe('');
            expect($('.feed .entry h2').html()).not.toBe(initialTitle);
            done();
        });
    });
}());
