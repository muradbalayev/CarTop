import Swal from 'sweetalert2'

// Helper to show a confirmation dialog
const confirmAction = async (title = 'Əminsiniz?', text = 'Bu addım geri qaytarıla bilməz!') => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Davam et',
  });
};

export const handleRestoreUser = async (restoreUser, userId) => {
  const result = await confirmAction('İstifadəçini bərpa et?', 'Bu istifadəçi aktiv olacaq');
  if (result.isConfirmed) {
    try {
      await restoreUser(userId).unwrap();
      Swal.fire('Bərpa olundu!', 'İstifadəçi uğurla bərpa edildi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Bərpa zamanı problem yarandı.', 'error');
    }
  }
};

export const handleUnblockUser = async (unblockUser, userId) => {
  const result = await confirmAction('Blokdan çıxarılsın?', 'İstifadəçi yenidən aktiv olacaq');
  if (result.isConfirmed) {
    try {
      await unblockUser(userId).unwrap();
      Swal.fire('Uğurlu!', 'İstifadəçi blokdan çıxarıldı.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Proses zamanı xəta baş verdi.', 'error');
    }
  }
};

export const handleDeleteUser = async (deleteUser, userId) => {
  const { value: reason } = await Swal.fire({
    title: 'Silinmə səbəbini yazın',
    input: 'text',
    inputPlaceholder: 'Səbəb...',
    showCancelButton: true,
    confirmButtonText: 'Davam et',
    cancelButtonText: 'Ləğv et',
  });
  if (!reason) return;

  const result = await confirmAction('İstifadəçi silinsin?', 'Bu addım geri qaytarıla bilməz!');
  if (result.isConfirmed) {
    try {
      await deleteUser({ id: userId, reason }).unwrap();
      Swal.fire('Silindi!', 'İstifadəçi uğurla silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'İstifadəçi silinə bilmədi.', 'error');
    }
  }
};

export const handleBlockUser = async (blockUser, userId) => {
  const { value: reason } = await Swal.fire({
    title: 'Bloklama səbəbini yazın',
    input: 'text',
    inputPlaceholder: 'Səbəb...',
    showCancelButton: true,
    confirmButtonText: 'Davam et',
    cancelButtonText: 'Ləğv et',
  });
  if (!reason) return;
  const result = await confirmAction('İstifadəçi bloklansın?', 'İstifadəçi sistemə daxil ola bilməyəcək');
  if (result.isConfirmed) {
    try {
      await blockUser({ id: userId, reason }).unwrap();
      Swal.fire('Bloklandı!', 'İstifadəçi bloklandı.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Bloklama zamanı xəta baş verdi.', 'error');
    }
  }
};

export const handlePermanentDeleteUser = async (permanentDeleteUser, userId) => {
  const result = await confirmAction('Tamamilə silinsin?', 'Bu istifadəçi və bütün məlumatları silinəcək!');
  if (result.isConfirmed) {
    try {
      await permanentDeleteUser(userId).unwrap();
      Swal.fire('Silindi!', 'İstifadəçi tamamilə silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Silinmə zamanı problem yarandı.', 'error');
    }
  }
};

export const handleUserPhotoDelete = async (userPhotoDelete, userId) => {
  const result = await confirmAction('Şəkil silinsin?', 'İstifadəçinin profil şəkli silinəcək');
  if (result.isConfirmed) {
    try {
      await userPhotoDelete(userId).unwrap();
      Swal.fire('Silindi!', 'Profil şəkli silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Şəkil silinə bilmədi.', 'error');
    }
  }
};

// No default export; import individually as needed
