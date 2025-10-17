"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Loader2,
  Upload,
  Image as ImageIcon,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Plus,
  Edit,
  Save,
  X,
} from "lucide-react";

interface GalleryPhoto {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  category: string | null;
  displayOrder: number;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();
  
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    displayOrder: 0,
    isVisible: true,
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  // Fetch photos
  useEffect(() => {
    if (session?.user) {
      fetchPhotos();
    }
  }, [session]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/gallery-photos");
      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
      }
    } catch (error) {
      toast.error("Failed to load photos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error("Sign out failed");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = editingId
        ? `/api/gallery-photos/${editingId}`
        : "/api/gallery-photos";
      const method = editingId ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          editingId ? "Photo updated successfully!" : "Photo added successfully!"
        );
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          category: "",
          displayOrder: 0,
          isVisible: true,
        });
        setEditingId(null);
        fetchPhotos();
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to save photo");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (photo: GalleryPhoto) => {
    setFormData({
      title: photo.title,
      description: photo.description || "",
      imageUrl: photo.imageUrl,
      category: photo.category || "",
      displayOrder: photo.displayOrder,
      isVisible: photo.isVisible,
    });
    setEditingId(photo.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      category: "",
      displayOrder: 0,
      isVisible: true,
    });
    setEditingId(null);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      const response = await fetch(`/api/gallery-photos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Photo deleted successfully!");
        fetchPhotos();
      } else {
        toast.error("Failed to delete photo");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const toggleVisibility = async (photo: GalleryPhoto) => {
    try {
      const response = await fetch(`/api/gallery-photos/${photo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isVisible: !photo.isVisible }),
      });

      if (response.ok) {
        toast.success(
          photo.isVisible
            ? "Photo hidden from gallery"
            : "Photo visible in gallery"
        );
        fetchPhotos();
      }
    } catch (error) {
      toast.error("Failed to update visibility");
    }
  };

  if (isPending || isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-852845-vpag-logo.png?"
              alt="VPAG Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white">
                Gallery <span className="text-primary">Manager</span>
              </h1>
              <p className="text-sm text-zinc-400">
                Welcome, {session.user.name}
              </p>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-zinc-700 hover:border-primary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Upload Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {editingId ? (
                <Edit className="w-6 h-6 text-primary" />
              ) : (
                <Plus className="w-6 h-6 text-primary" />
              )}
              <h2 className="text-2xl font-bold text-white">
                {editingId ? "Edit Photo" : "Add New Photo"}
              </h2>
            </div>
            {editingId && (
              <Button
                onClick={handleCancelEdit}
                variant="outline"
                className="border-zinc-700"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Photo Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="e.g., Sufi Whirling Performance"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-white">
                  Category (Optional)
                </Label>
                <Input
                  id="category"
                  type="text"
                  placeholder="e.g., Performance, Behind the Scenes"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl" className="text-white">
                Image URL *
              </Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
                disabled={isSubmitting}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
              <p className="text-xs text-zinc-500">
                Use image hosting services like Imgur, Cloudinary, or upload to your server
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Description (Optional)
              </Label>
              <Textarea
                id="description"
                placeholder="Brief description of the photo..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                disabled={isSubmitting}
                className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="displayOrder" className="text-white">
                  Display Order
                </Label>
                <Input
                  id="displayOrder"
                  type="number"
                  value={formData.displayOrder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      displayOrder: parseInt(e.target.value) || 0,
                    })
                  }
                  disabled={isSubmitting}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <p className="text-xs text-zinc-500">
                  Lower numbers appear first in the gallery
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Visibility</Label>
                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="isVisible"
                    checked={formData.isVisible}
                    onChange={(e) =>
                      setFormData({ ...formData, isVisible: e.target.checked })
                    }
                    className="w-5 h-5 text-primary bg-zinc-800 border-zinc-700 rounded focus:ring-primary"
                  />
                  <label htmlFor="isVisible" className="text-zinc-300">
                    Show in public gallery
                  </label>
                </div>
              </div>
            </div>

            {/* Preview */}
            {formData.imageUrl && (
              <div className="space-y-2">
                <Label className="text-white">Preview</Label>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-700">
                  <Image
                    src={formData.imageUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {editingId ? "Updating..." : "Adding..."}
                </>
              ) : (
                <>
                  {editingId ? (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      Update Photo
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2" />
                      Add Photo
                    </>
                  )}
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Photos Grid */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <ImageIcon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-white">
              Gallery Photos ({photos.length})
            </h2>
          </div>

          {photos.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 mx-auto text-zinc-700 mb-4" />
              <p className="text-zinc-400 text-lg">No photos yet</p>
              <p className="text-zinc-500 text-sm">
                Add your first photo using the form above
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                    {!photo.isVisible && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <EyeOff className="w-8 h-8 text-zinc-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1 truncate">
                      {photo.title}
                    </h3>
                    {photo.category && (
                      <p className="text-primary text-sm mb-2">
                        {photo.category}
                      </p>
                    )}
                    {photo.description && (
                      <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                        {photo.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-700">
                      <span className="text-xs text-zinc-500">
                        Order: {photo.displayOrder}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleVisibility(photo)}
                          className="border-zinc-700 hover:border-primary"
                        >
                          {photo.isVisible ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(photo)}
                          className="border-zinc-700 hover:border-primary"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(photo.id)}
                          className="border-zinc-700 hover:border-red-500 text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}