from rest_framework import permissions, viewsets

from fostpost_app.models import CraftCloud_Account
from fostpost_app.permissions import IsAccountOwner
from fostpost_app.serializers import CraftCloud_AccountSerializer

def index(request):
    return render(request, '/fostpost_app/index.html')

def font(request):
    return render(request,'/fostpost_app/font.html')

def create(request):
    return render(request,'/fostpost_app/create.html')
    
class CraftCloud_AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = CraftCloud_Account.objects.all()
    serializer_class = CraftCloud_AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            CraftCloud_Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)