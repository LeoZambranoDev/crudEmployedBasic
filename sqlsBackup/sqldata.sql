PGDMP     1    0                z            db_crud_employed    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    db_crud_employed    DATABASE     o   CREATE DATABASE db_crud_employed WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
     DROP DATABASE db_crud_employed;
                postgres    false            �          0    16390    departamento 
   TABLE DATA           C   COPY public.departamento (codigo, nombre, presupuesto) FROM stdin;
    public          postgres    false    210   �       �          0    16385    empleado 
   TABLE DATA           b   COPY public.empleado (codigo, nif, nombre, apellido1, apellido2, codigo_departamento) FROM stdin;
    public          postgres    false    209   (       �           0    0    departamento_codigo_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.departamento_codigo_seq', 4, true);
          public          postgres    false    211            �           0    0    empleado_codigo_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.empleado_codigo_seq', 10, true);
          public          postgres    false    212            �   W   x�3�JM.-*�/V�(�M��/�4400�2�tO-J�K�L�4�9}��SK2��9M�&���y%�I�9�)�)��@Ez�\1z\\\ �!      �   s   x��;
�@���$ـ}
�SZH�?�� ���x'O��\������1�St����q�+�-A��M��/�`�Ȧ����-�j�q�C]�����;MF������dZ��{�"�     