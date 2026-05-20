insert into public.categories (name, slug, description) values
('Corporate News', 'corporate-news', 'Market-moving announcements and organizational milestones.'),
('Executive Interviews', 'executive-interviews', 'Conversations with leaders shaping business influence.'),
('Insights & Analysis', 'insights-analysis', 'Strategic analysis for Pakistan''s business ecosystem.'),
('Brand Stories', 'brand-stories', 'Premium storytelling for brands with substance.'),
('Events & Happenings', 'events-happenings', 'Executive forums, launches, and gatherings.');

insert into public.site_settings (id, contact_email, seo_defaults)
values (1, 'editorial@thecorporatecorner.pk', '{"title":"The Corporate Corner","description":"Pakistan premium corporate publication"}')
on conflict (id) do update set contact_email = excluded.contact_email;
