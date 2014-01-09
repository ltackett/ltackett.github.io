# Totally nabbed this Rakefile from Assaf Gelber.
# ... and then hacked it to use Compass.
# http://agelber.com/blog/jekyll-haml-sass-on-github-pages/

namespace :haml do
  require 'haml'

  def convert file, destination
    base_name = File.basename(file, '.haml') + '.html'
    html = File.open(file, 'r') { |f| Haml::Engine.new(f.read).render }
    File.open(File.join(destination, base_name), 'w') { |f| f.write html }
  end

  desc 'Parse haml layout files'
  task :layouts do
    Dir.glob('_layouts/_haml/*.haml') do |path|
      convert path, '_layouts'
    end

    puts 'Parsed haml layout files'
  end

  desc 'Parse haml include files'
  task :includes do
    Dir.glob('_includes/_haml/*.haml') do |path|
      convert path, '_includes'
    end

    puts 'Parsed haml include files'
  end

  desc 'Parse haml index files'
  task :indexes do
    Dir.glob('**/index.haml') do |path|
      convert path, File.dirname(path)
    end

    puts 'Parsed haml index files'
  end

end

desc 'Parse all haml items'
task haml: ['haml:layouts', 'haml:includes', 'haml:indexes']

desc 'Parse sass files'
task :sass do
  require 'compass'
  require 'sass/plugin'
  require 'sass-globbing'

  # FIXME: I needed a pair of pliers and a screwdriver,
  #        ... but I coded a hammer instead.

  Compass.add_configuration({
    :project_path => '.',
    :sass_path => 'css/_sass',
    :css_path => 'css'
  }, 'compass_config')

  Compass.compiler.compile('css/_sass/main.scss',   'css/main.css')
  Compass.compiler.compile('css/_sass/syntax.scss', 'css/syntax.css')

  puts 'Parsed stylesheets'
end

desc 'Build all haml and sass files for deployment'
task build: [:haml, :sass]