from django.views.generic import TemplateView

# Create your views here.
class ReactView(TemplateView):
    template_name = "index.html"