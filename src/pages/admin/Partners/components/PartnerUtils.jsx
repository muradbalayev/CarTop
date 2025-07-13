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

export const handleRestorePartner = async (restorePartner, partnerId) => {
  const result = await confirmAction('İstifadəçini bərpa et?', 'Bu istifadəçi aktiv olacaq');
  if (result.isConfirmed) {
    try {
      await restorePartner(partnerId).unwrap();
      Swal.fire('Bərpa olundu!', 'İstifadəçi uğurla bərpa edildi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Bərpa zamanı problem yarandı.', 'error');
    }
  }
};

export const handleUnblockPartner = async (unblockPartner, partnerId) => {
  const result = await confirmAction('Blokdan çıxarılsın?', 'İstifadəçi yenidən aktiv olacaq');
  if (result.isConfirmed) {
    try {
      await unblockPartner(partnerId).unwrap();
      Swal.fire('Uğurlu!', 'İstifadəçi blokdan çıxarıldı.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Proses zamanı xəta baş verdi.', 'error');
    }
  }
};

export const handleDeletePartner = async (deletePartner, partnerId) => {
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
      await deletePartner({ id: partnerId, reason }).unwrap();
      Swal.fire('Silindi!', 'İstifadəçi uğurla silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'İstifadəçi silinə bilmədi.', 'error');
    }
  }
};

export const handleBlockPartner = async (blockPartner, partnerId) => {
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
      await blockPartner({ id: partnerId, reason }).unwrap();
      Swal.fire('Bloklandı!', 'İstifadəçi bloklandı.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Bloklama zamanı xəta baş verdi.', 'error');
    }
  }
};

export const handlePermanentDeletePartner = async (permanentDeletePartner, partnerId) => {
  const result = await confirmAction('Tamamilə silinsin?', 'Bu istifadəçi və bütün məlumatları silinəcək!');
  if (result.isConfirmed) {
    try {
      await permanentDeletePartner(partnerId).unwrap();
      Swal.fire('Silindi!', 'İstifadəçi tamamilə silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Silinmə zamanı problem yarandı.', 'error');
    }
  }
};

export const handlePartnerPhotoDelete = async (partnerPhotoDelete, partnerId) => {
  const result = await confirmAction('Şəkil silinsin?', 'İstifadəçinin profil şəkli silinəcək');
  if (result.isConfirmed) {
    try {
      await partnerPhotoDelete(partnerId).unwrap();
      Swal.fire('Silindi!', 'Profil şəkli silindi.', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Xəta!', 'Şəkil silinə bilmədi.', 'error');
    }
  }
};

// No default export; import individually as needed
